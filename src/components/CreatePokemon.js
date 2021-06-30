import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MultiSelect from "react-multi-select-component";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { addNewPokemonToTheList } from '../actions/pokemonListActions'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

const CreatePokemon = () => {

  const dispatch = useDispatch();
  const [ name, setnamePokemon ] = useState("")
  const [ weight, setweightPokemon ] = useState(0)
  const [ abilities, setabilitiesPokemon ] = useState([])
  const [imgPokemon, setimgPokemon] = useState(1)
  const [showWarning, setshowWarning] = useState(false);
  let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imgPokemon}.png`
  const classes = useStyles()
  const theme = useTheme()
  const Chooseabilities = [
    'Water Absorb',
    'Volt Absorb',
    'Flash Fire',
    'Cloud Nine',
    'Battle Armor',
    'Shell Armor',
    'Magnet Pull',
  ];
  let history = useHistory();


  const handleChangeabilities = (event) => {
    setabilitiesPokemon(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setabilitiesPokemon(value);
  };

  function Pokemonnamechange(name) {setnamePokemon(name)}
  function Pokemonweightchange(weight) {setweightPokemon(weight)}
  function Pokemonimgchange(imgnum){setimgPokemon(imgnum)}

  function AddPokemonNew(pokemon){
    if(name === "" || weight === 0){
      setshowWarning(true)
    }else{
      dispatch(addNewPokemonToTheList(pokemon))
      history.push('/pokemonList')
    }
  }

    return (
      <>
        <div className="FormAddPokemon">
          <div className="row1">
            <img src={pokemonImage} class="image--cover img-responsive" />
            <p>Pokémon name: {name}</p>
            <p>Weight: {weight}</p>
            <p>Abilities: {abilities}</p>
          </div>

          <div className="row2">
            <p>Enter name:</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="inputAdd"
              onChange={(e) => Pokemonnamechange(e.target.value)}
              value={name}
            />

            <p>Enter Weight:</p>
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              className="inputAdd"
              onChange={(e) => Pokemonweightchange(e.target.value)}
              value={weight}
            />

            <p id="demo-mutiple-name-label">Enter Abilities:</p>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              className="inputAdd"
              multiple
              value={abilities}
              onChange={handleChangeabilities}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {Chooseabilities.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>

            <p>Choose img:</p>
            <input
              type="number"
              name="img"
              placeholder="img"
              className="inputAdd"
              onChange={(e) => Pokemonimgchange(e.target.value)}
              value={imgPokemon}
            />

            {!showWarning ? <p></p>:<p className="pwarning">*empty fields</p>}

            <button
              className="buttonAgregar"
              onClick={() => AddPokemonNew({ name, abilities, weight, pokemonImage })}
            >
              Save
            </button>

            <button className="buttonAgregar">
              <Link to="/" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </button>
          </div>
        </div>
      </>
    );
}

export default CreatePokemon;