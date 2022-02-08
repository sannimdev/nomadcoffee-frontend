import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet-async';

function HelmetTitle({ title }) {
    return <Helmet title={`${title} | Nomad Coffee`} />;
}

HelmetTitle.prototype = {
    title: PropTypes.string.isRequired,
};

export default HelmetTitle;
