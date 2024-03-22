import accountimg from './image/mine-svgrepo-com.svg'
function Account(props) {
    return(
        <div className={'account-page'}>
            <img src={accountimg} className={'accountimg'} alt={'Account'}></img>
            <div className={'account-headings'}>
            <div className={'account-heading'}>
                Account
            </div>
            <div className={'account-details'}>
                Name : {props.name}
            </div>
            <div className={'account-details'}>
                UserID : {props.userid}
            </div>
            <div className={'account-details'}>
                Mobile No. : {props.mobile}
            </div>
            <div className={'account-details'}>
                Address : {props.address}
            </div>
            </div>
        </div>
    )
}

export default Account;