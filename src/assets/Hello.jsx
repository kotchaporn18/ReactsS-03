
const Hello = ({name,message}) => {
    console.log({name,message});

    return (
      <div>
        <h1>
            Hello {name} {message}
        </h1> 
        </div>
    );
  };
 
  
  import PropTypes from 'prop-types';

  Hello.PropTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string
  };

    Hello.defaultProps = {
        name: "Guest",
        message: "Good morning"
    };

    export default Hello;