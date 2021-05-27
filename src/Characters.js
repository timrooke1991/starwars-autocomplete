import React from 'react';
import { connect } from 'react-redux';

import Character from './Character';

const Characters = ({ characters = [] }) => {
  return (
    <section className="Characters">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </section>
  );
};

/// What has he done to fix this....

export default connect(({ characters }) => ({ characters}))(Characters);
