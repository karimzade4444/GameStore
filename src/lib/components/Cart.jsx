import { Button } from "antd";
import { useStore } from "../store/store";
import { DeleteOutlined } from "@ant-design/icons";

const Cart = () => {
  const { cart, removeFromCart } = useStore();
  console.log(cart);
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  return (
    <>
      <p className="pt-30 pl-20  text-white text-4xl font-bold">
        Shopping Cart
      </p>
      <p className=" text-neutral-400 pl-20 pt-3">
        You have {cart.length} items in your cart
      </p>

      <div className="p-20 flex justify-between items-start">
        <div className="w-[65%] bg-linear-to-b from-neutral-800 to-white/20 rounded-2xl">
          {cart.map((el) => (
            <div>
              <div className="p-6 flex justify-between  gap-5">
                <div className=" flex gap-5">
                  <img src={el.img} alt="" className="w-25 h-30 rounded-2xl" />
                  <div>
                    <p className="pt-3 text-white text-xl">{el.name}</p>
                    <p className="pt-5 w-140 text-neutral-400">{el.title}</p>
                  </div>
                </div>
                <div className=" flex justify-between items-end flex-col">
                  <DeleteOutlined
                    className="text-white! text-2xl cursor-pointer"
                    onClick={() => removeFromCart(el.id)}
                  />
                  <p className="text-white text-2xl">$ {el.price}</p>
                </div>
              </div>

              <div className="w-[95%] h-0.5 bg-white/40 rounded-2xl m-auto"></div>
            </div>
          ))}
          ,
        </div>
        <div className="w-[30%] h-100 bg-linear-to-b from-neutral-800 to-white/20 rounded-2xl">
          <p className="text-white pt-5 text-center text-2xl font-bold">
            Order Summary
          </p>
          <div className="text-neutral-400 text-xl p-5 flex justify-between items-center">
            <p>Subtotal:</p>
            <p
              className="text-white
            "
            >
              $ {total}
            </p>
          </div>
          <div className="text-neutral-400 text-xl pl-5 pr-5 flex justify-between items-center mb-5">
            <p>Discount:</p>
            <p
              className="text-white
            "
            >
              $ 00
            </p>
          </div>
          <div className="w-[95%] h-0.5 bg-neutral-400 m-auto"></div>
          <div className="text-white text-3xl p-5 mt-5 flex justify-between items-center ">
            <p>Total:</p>
            <p>$ {total}</p>
          </div>
          <div className=" flex justify-center items-center mt-10">
            <Button type="primary" className="w-70 h-12! text-2xl! font-bold!">Continue Shopping</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
