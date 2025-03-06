import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Home
});

function Home() {
    return (
        <main>
            <h1 className="text-red-500 text-9xl">Live Streamer App</h1>
        </main>
    );
}
