import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../../seed';

const GameInfo = (props) => {
  const champ = champList.Heroes[props.champion].key;
  const datePlayed = JSON.stringify(new Date(props.timestamp));
  return (
    <div >
      <h4>{datePlayed}</h4>
      <img src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
    </div>
  );
};

GameInfo.propTypes = {
  champion: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default GameInfo;
