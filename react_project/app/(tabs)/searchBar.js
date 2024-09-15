import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

  export const searchBar = () => {
    const [input, setInput] = useState("");
    
    const fecthResults = (value) =>  {
        fetch("")
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
        });
    };

    const changeHandler = () => {
        setInput(value)
        fecthResults(value)
    };

  return (
      <div></div>
  );
}

const styles = StyleSheet.create({

});
