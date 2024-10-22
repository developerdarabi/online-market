import avatarSrv from '../../assets/avatar.jpg'

export default function UserAvatar({ size = 300, className = '' }: { size?: number, className?: string }) {
    return (
        <img src={avatarSrv} className={`${className}`} width={size} height={size} />
    )
}
