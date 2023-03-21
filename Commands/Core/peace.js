module.exports = {
    name: "hi",
    alias: ["peace","alive"],
    desc: "Say peace to bot.",
    react: "✌️",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        await Miku.sendMessage(m.from,{image:{url:botImage1},caption:`\nPeace *${pushName}*, I am *PEACE MD* bot develop by *CHARITH PRAMODYA SENANAYAKE*. type *${prefix}menu* to get my menu list.\n\n_⌛ Server Uptime:_ *${uptime()}*\n_🟢 Status:_ *Operational*\n\n🫂 Thanks for using PEACE MD !!\n`},{quoted:m})
    }
}