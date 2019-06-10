import { Component } from 'react';

class Clock extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date()
      }
   }

   componentDidMount() {
      this.timer = setInterval(() => {
         this.tick();
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }

   tick = () => {
      this.setState({
         date: new Date()
      })
   }

   render() {
      return this.state.date.toLocaleTimeString('en-US', {
         hour: 'numeric',
         minute: 'numeric',
         second: 'numeric',
         hour12: true
      });
   }
}

export default Clock;