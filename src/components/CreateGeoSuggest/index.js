import React from "react";
import Geosuggest from "react-geosuggest";
import "../../styles.css";
import { withScriptjs } from 'react-google-maps'
import { API_KEY } from '../../config'

class CreateGeoSuggest extends React.Component {
  render() {
    const { input, name, placeholder } = this.props.location.address;
    return (
      <Geosuggest
        ref={el => (this._geoSuggest = el)} // eslint-disable-line
        placeholder={placeholder}
        inputClassName="address"
        name={name}
        initialValue={input.value}
        onSuggestSelect={suggest => {
          if (!suggest) return input.onChange(null);
          input.onChange(suggest.label);
          this.props.location.latitude.input.onChange(suggest.location.lat);
          this.props.location.longitude.input.onChange(suggest.location.lng);
          return;
        }}
        {...input}
      />
    );
  }
}
const GeoSuggestion = withScriptjs(CreateGeoSuggest);

export default function GeoSuggestionCreation(props) {
  return (
    <GeoSuggestion
      googleMapURL={API_KEY}
      loadingElement={<div>ciao</div>}
      {...props}
    />
  )
} 
