import { Oval } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <Oval
                visible={true}
                height="45"
                width="45"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </>
    )
}

export default Loader