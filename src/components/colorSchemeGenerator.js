import chroma from 'chroma-js';

export default function colorSchemeGenerator() {
    return {
        tooltipText: "Copy to clipboard",
        themeColors: {
            "primary": "#340c44",
            "secondary": "#0049ea",
            "success": "#00a063",
            "info": "#d4cff0",
            "warning": "#dccc00",
            "danger": "#e92c00",
            "light": "#897964",
            "dark": "#4e9aee"
        },
        output: '',

        init() {
            this.generateOutput();

            this.$watch('themeColors', () => {
                this.generateOutput();
            }, {deep: true});
        },

        copyToClipboard() {
            navigator.clipboard.writeText(this.output).then(() => {
                this.tooltipText = "copied!";
                setTimeout(() => this.tooltipText = "Copy to clipboard", 2000); // Reset tooltip text after 2s
            }).catch((error) => {
                console.error('Copy failed!', error);
            });
        },

        generateOutput() {
            const colorEntries = Object.entries(this.themeColors)
                .map(([name, color]) => `    "${name}":      ${color},`)
                .join("\n");

            this.output = `$theme-colors: (\n${colorEntries}\n);`;
        },

        generateRandomColors() {
            // Define hue ranges for green, yellow, and red
            const hueRanges = {
                success: [80, 140], // Green tones
                warning: [45, 60],   // Yellow tones
                danger:  [0, 15],    // Red tones
            };

            // Helper function to generate a random color within a hue range
            const generateHue = (hueRange) => {
                const hue = Math.floor(Math.random() * (hueRange[1] - hueRange[0] + 1)) + hueRange[0];
                // Using Chroma.js to generate a bright color with good saturation and convert to HEX
                return chroma.hsl(hue, 1, 0.5).hex(); // Saturation at 100%, Lightness at 50%
            };

            // Update the specific colors
            this.themeColors.success = generateHue(hueRanges.success);
            this.themeColors.warning = generateHue(hueRanges.warning);
            this.themeColors.danger = generateHue(hueRanges.danger);

            // Generate random colors for the rest of the color types
            for (const colorType in this.themeColors) {
                if (!['success', 'warning', 'danger'].includes(colorType)) {
                    this.themeColors[colorType] = chroma.random().hex();
                }
            }

            // Trigger update of the output
            this.generateOutput();
        },

    };
}
