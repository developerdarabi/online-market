import logo from '../../assets/logo.png'

export default function Logo({size=50}:{size?:number}) {
    return (
        <img src={logo} className='' width={size} height={size}/>
    )
}
