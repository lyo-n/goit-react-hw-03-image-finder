import React, {Component} from 'react';
import propTypes from 'prop-types';
import styles from '../modal/modal.module.css';

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeModal);
    }

    componentDidUnmount() {
        window.addEventListener('keydown', this.closeModal);
    }

    closeModal = e => {
        if (e.keyCode === 27){
            this.props.onClose();
        }
    };

    clickOverlay = e => {
        if (e.target.nodeName !== 'IMG') {
            this.props.onClose();
        }
    };

    render() {
        const {largeImage} =this.props;
        return(
            <div onClick={this.clickOverlay} className={styles.Overlay}>
                <div className={styles.Modal}>
              <img src={largeImage} alt="ImageLarge" />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    largeImage: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
};