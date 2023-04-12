// import React, {Component} from 'react';

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         dataFetched: false,
//         data: []
//       };
//     }
    
//     componentDidMount() {
//       fetch("https://api.toptensongs.com/data")
//         .then(res => res.json())
//         .then(
//           (response) => {
//             this.setState({
//               dataFetched: true,
//               data: response.data
//             });
//           },
//           (error) => {
//             this.setState({
//               dataFetched: true,
//               error
//             });
//           }
//         )
//     }
    
//     render() {
//       const { error, dataFetched, data } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ol>
//             {data.map(value => (
//               <li key={value.name}>
//                 {value.name} - {item.artist}
//               </li>
//             ))}
//           </ol>
//         );
//       }
//     }
//   }