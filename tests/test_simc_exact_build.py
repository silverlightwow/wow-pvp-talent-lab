import asyncio

from pvpcalc.sources import simc


class FakeClient:
    def __init__(self):
        self.text_urls = []
        self.json_calls = []

    async def get_text(self, url):
        self.text_urls.append(url)

        if "/midnight/" in url:
            return (
                "SimulationCraft test for World of Warcraft "
                "12.1.0.69875 Live\n"
            )

        if "/0908ace/" in url:
            return (
                "SimulationCraft test for World of Warcraft "
                "12.1.0.69814 Live\n"
            )

        raise AssertionError(url)

    async def get_json(self, url, params=None):
        self.json_calls.append((url, params))

        return [
            {
                "sha": "0908ace",
                "commit": {
                    "message": (
                        "[live] Game data update "
                        "(Build 69814)"
                    )
                },
            }
        ]


def test_fetch_dump_pins_previous_exact_build():
    client = FakeClient()

    dump = asyncio.run(
        simc.fetch_dump(
            client,
            "Priest",
            target_build="12.1.0.69814",
        )
    )

    assert dump.build == "12.1.0.69814"
    assert any(
        "/0908ace/SpellDataDump/priest.txt"
        in url
        for url in client.text_urls
    )

    assert client.json_calls
    _, params = client.json_calls[0]
    assert params["sha"] == "midnight"
    assert params["path"] == "SpellDataDump/priest.txt"
