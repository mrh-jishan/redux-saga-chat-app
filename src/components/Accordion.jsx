import React from 'react';
import { PropTypes } from 'prop-types';

const styles = {
  margin: '5px 0'
};
const noop = () => {};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px',
  userSelect: 'none',
  border: '1px solid'
};
const bodyStyle = {
  borderRight: '1px solid',
  borderLeft: '1px solid',
  borderBottom: '1px solid',
  display: 'flex',
  padding: '5px'
};

const toggleStyle = {
  cursor: 'pointer',
  transform: 'rotate(0deg)'
};
const toggleOpenStyle = {
  transform: 'rotate(180deg)'
};

const DefaultHeader = ({ isOpen, title, onClick }) => (
  <div style={headerStyle}>
    <span>{title}</span>
    <span
      onClick={onClick}
      style={isOpen ? { ...toggleStyle, ...toggleOpenStyle } : toggleStyle}
    >
      v
    </span>
  </div>
);

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.open ? props.open : false
    };
  }
  static propTypes = {
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  };
  static defaultProps = {
    open: false,
    onOpen: noop,
    onClose: noop
  };
  onClick = () => {
    this.setState(state => {
      const { isOpen } = state;
      if (!isOpen){
        this.props.onOpen();
      }else {
        this.props.onClose();
      }
      return { isOpen: !isOpen };
    });
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ isOpen: nextProps.open });
    }
  }
  render() {
    const { title, children, Header } = this.props;
    const { isOpen } = this.state;
    const headerProps = { onClick: this.onClick, isOpen, title };
    return (
      <div style={styles}>
        {Header ? (
          <Header {...headerProps} />
        ) : (
          <DefaultHeader {...headerProps} />
        )}
        {isOpen && children ? <div style={bodyStyle}>{children}</div> : null}
      </div>
    );
  }
}

export default Accordion;
