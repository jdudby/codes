import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '10%',
    left                  : '10%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 :'80%',
    height                :'80vh',
    backgroundColor       :'#fff',
     opacity              : 0.95
  }
}

const content_style={
  paddingLeft:'1%',
  paddingRight:'2%',
  display:'inline-Block',
  width:'46%',
  verticalAlign:'top',
  borderRight:'1px #4191a5 inset'
  }

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class PopWindows extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitPalletInfo=this.submitPalletInfo.bind(this);
  }
  submitPalletInfo(e) {
e.preventDefault();
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#4191a5';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Add pallets...</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >


          <button onClick={this.closeModal} style={{color:'#f00', fontweight:'bold',fontsize:'20p', width:50, position:'absolute', right:0, top:0}}>
            Close
          </button>

          <section style={content_style}>
              <h2 ref={subtitle => this.subtitle = subtitle} style={{textDecoration:'underline'}}>
                Key the pallets one by one
              </h2>
            <form>
            <p>  Product code</p>
              <input />
              <p>  Product Description</p>
              <input />
              <p>  Pack size</p>
              <input />
              <p>  Unit of Mesure</p>
              <input />
              <p>  Quantity on the pallet</p>
              <input />
              <button onClick={this.submitPalletInfo}>Save pallet</button>
            </form>
          </section>
          <section style={content_style}>
            <h1 style={{textAlign:'center', color:'#4191a5', textDecoration:'underline'}}>
              Overview of pallets entered
            </h1>
          </section>


        </Modal>
      </div>
    );
  }
}

export default PopWindows;
