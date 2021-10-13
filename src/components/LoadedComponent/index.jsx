import Error from '../Error/index'
import Loading from '../Loading/index'

const LoadedComponent = ({ isLoading, error, children }) => {
    if (isLoading) {
        return <Loading></Loading>;
    }
    if (error) {
        return <Error></Error>;
    }
    return children
}

export default LoadedComponent;