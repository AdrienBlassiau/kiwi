import React from 'react';

export default class Modal extends React.Component {
  render() {
    const show = this.props.show;
    const displayClass = show ? 'modal-display-block' : 'modal-display-none';
    return (
      <div className={'modal-master-block ' + displayClass}>
        <div className="modal-handler" onClick={this.props.onClose}>
          <div
            className="modal-master"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <div className="modal-relative-master">
              <span onClick={this.props.onClose} className="close">
                &times;
              </span>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
