import React from 'react';
import Education from './education';

const Content = () => {
  return (
    <div style={{ margin: '0 20px', position: 'relative', top: -75 }}>
      <h3 style={{ margin: '20px 0' }}>ABOUT ME</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
        non, dolorem, cumque distinctio magni quam expedita velit laborum sunt
        amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum!
        Quasi!.
      </p>
      <h3 style={{ margin: '20px 0' }}>EDUCATION</h3>
      <Education
        year="1990"
        title="I was born in Katowice"
        ctx="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi."
      />
      <Education
        year="2005"
        title="Secondary school specializing in artistic"
        ctx="Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus."
      />
      <Education
        year="2009"
        title="First level graduation in Graphic Design"
        ctx="Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat."
      />
      <Education
        year="2012"
        title="Second level graduation in Graphic Design"
        ctx="Ducimus, aliquam temore autem itaque at accusantium!"
      />
    </div>
  );
};

export default Content;
