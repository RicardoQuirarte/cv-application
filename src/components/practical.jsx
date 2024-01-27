import "/src/styles/form.css";

export default function Practical() {
  return (
    <>
      <form action="" className="section">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Google"
          required
        />
        <label htmlFor="position">Position title</label>
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Manager"
          required
        />
        <label htmlFor="responsibilities">Main responsibilities</label>
        <input
          type="text"
          name="responsibilities"
          id="responsibilities"
          placeholder="Keep the hard work up!"
          required
        />
        <label htmlFor="start-date">Start date</label>
        <input type="date" name="start-date" id="start-date" required />
        <label htmlFor="finish-date">Finish date</label>
        <input type="date" name="finish-date" id="finish-date" required />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
