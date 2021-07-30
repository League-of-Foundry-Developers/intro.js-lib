// Set theme on initialization
Hooks.on("init", () => {
    // Allow user to enable and disable theme
    game.settings.register("_introjs", "theme", {
        name: "Alternate Theme",
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: () => Hooks.call("altIntroTheme")
    });

    if (game.settings.get("_introjs", "theme")) Hooks.call("altIntroTheme");
});

// Setup alternate theme
Hooks.on("altIntroTheme", () => {
    // If enabled
    if (game.settings.get("_introjs", "theme")) {
        // Remove all existing uses of themes
        document.querySelectorAll(".intro-theme").forEach(element => element.remove());

        // Use new theme; add it to the DOM
        let el = document.createElement("link");
        el.classList.add("intro-theme");
        el.href = `modules/_introjs/styles/foundry.css`;
        el.rel = "stylesheet";
        el.type = "text/css";
        el.media = "all";
        document.head.appendChild(el);
    };
});