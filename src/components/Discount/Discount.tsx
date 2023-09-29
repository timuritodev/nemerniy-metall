import './Discount.css';

export const Discount = ({ num }: { num: number }) => {
	return <div className="discount">{num}%</div>;
};
