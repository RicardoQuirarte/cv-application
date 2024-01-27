import "/src/styles/form.css";

export default function Education() {
  return (
    <>
      <form action="" className="section">
        <label htmlFor="school">School name</label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="Harvard"
          required
        />
        <label htmlFor="title">Title of study</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Computer Science"
          required
        />
        <label htmlFor="start">Start date</label>
        <input type="date" name="start" id="start" placeholder="" required />
        <label htmlFor="finish">Finish date</label>
        <input type="date" name="finish" id="finish" required />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
