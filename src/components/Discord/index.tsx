import DiscordIcon from '../assets/discord-mark-white.png';

function DiscordInvite() {
  return(
    <div className="discordContainer" >
      <a href="https://discord.gg/fVKQ2VcwxN" target="_blank" rel="noreferrer">
        <img src={DiscordIcon} alt="Discord Icon" className="discordIcon" />
      </a>
    </div>
  )
}
export default DiscordInvite;