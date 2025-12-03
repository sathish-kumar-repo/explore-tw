export default function page() {
  return (
    <>
      <div className="shadow-sm p-4 bg-white">
        This div has small shadow, for small depth
      </div>
      <div className="shadow-lg p-4 bg-white">
        This div has large shadow, for larger depth
      </div>
      <div className="shadow-inner p-4 bg-gray-200">
        This div has inner shadow
      </div>
    </>
  );
}
