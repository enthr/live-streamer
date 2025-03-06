import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Home
});

function Home() {
    return (
        <main>
            <h1>Live Streamer App</h1>
        </main>
    );
}
