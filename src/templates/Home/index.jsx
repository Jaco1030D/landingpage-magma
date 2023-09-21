// import { Feedback, Footer, Navbar, Partnerships, QuotationService, SectorsActivity, Translation } from '../../components';
import './styles.css';

function Home() {
  
  return (
    <div className="App">
      {/* <Navbar />
      <QuotationService />
      <Partnerships />
      <SectorsActivity />
      <Feedback />
      <Translation />
      <Footer /> */}
      <form name='contact' action="/contact" method='post'>
        <input type='hidden' name='form-name' value="contact" />
        <input required type="text" name='name' />
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}

export default Home;
