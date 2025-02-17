import { getImageUrl } from '../data/utils';

function Profile({ name, imageId, size, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(',')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <div>
        <Profile
          name="Maria Skłodowska-Curie"
          imageId="szV5sdG"
          size={70}
          profession="physicist and chemist"
          awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal',
          ]}
          discovery="polonium (chemical element)"
        />
        <Profile
          name="Katsuko Saruhashi"
          imageId="YfeOqp2"
          size={70}
          profession=" geochemist"
          awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
          discovery="a method for measuring carbon dioxide in
              seawater"
        />
      </div>
    </div>
  );
}
