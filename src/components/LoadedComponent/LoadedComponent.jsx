import Error from '../Error/Error'

const LoadedComponent = ({ isLoading, error, children }) => {
    if (isLoading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <Error></Error>;
    }
    return children
}

export default LoadedComponent;