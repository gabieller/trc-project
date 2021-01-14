import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
})

export default function CitySelect() {
  const classes = useStyles()

  return (
    <Autocomplete
      id="city-select"
      className="w-75"
      //   style={{ border: 0 }}
      options={city}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.label}
      renderOption={option => <React.Fragment>{option.label}</React.Fragment>}
      renderInput={params => (
        <TextField
          {...params}
          label="| Enter city"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  )
}

const city = [
  { label: "Boston" },
  { label: "Chicago" },
  { label: "Houston" },
  { label: "Los Angeles " },
  { label: "New York City" },
  { label: "Philadelphia" },
  { label: "Phoenix" },
  { label: "San Francisco " },
]
