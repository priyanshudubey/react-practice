const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="border border-black p-2 m-2"
          placeholder="Email"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 bg-orange-700 rounded-lg cursor-pointer hover:bg-green-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
