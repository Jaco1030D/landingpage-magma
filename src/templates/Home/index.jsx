import { Feedback, Footer, Navbar, Partnerships, QuotationService, SectorsActivity, Translation } from '../../components';
import './styles.css';

function Home() {
  
  return (
    <div className="App">
      <Navbar />
      <QuotationService />
      <Partnerships />
      <SectorsActivity />
      <Feedback />
      <Translation />
      <Footer />
    </div>
  );
}

export default Home;
