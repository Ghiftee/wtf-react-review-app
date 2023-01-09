import Card from './Card';
import {Link} from 'react-router-dom';

function About() {
  return (
        
    <Card>
      <h3 className="head">About The Review Application</h3>
      <p>This is an application for customers to leave a review of their delivery.</p>
      <br />
      <p>Version: 1.1.0</p>
      <br />
      <p>
        <Link to='/'>Go Back Home</Link>
      </p>
    </Card>
        
  )
}

export default About;
