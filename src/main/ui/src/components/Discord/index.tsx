import DiscordIcon from '../assets/discord-mark-white.png';

function DiscordInvite() {
  return(
    <a className="discordContainer" href="https://discord.gg/esnHNbHnXB" target="_blank" rel="noreferrer">
      <img src={DiscordIcon} alt="Discord Icon" className="discordIcon" />
    </a>
  )
}
export default DiscordInvite;