import Development from './env/Development';
import Production from './env/Production';
const environment = process.env.REACT_APP_ENVIRONMENT || 'development';

const Config = (env) => {
    switch (env) {
        case 'production':
            return Production;
        case 'development':
        default:
            return Development;

    }
};
export default Config(environment);