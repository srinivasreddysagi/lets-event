import React from "react";
import { useRouter } from "next/navigation";

export const Jambotron = ({ pickupLine, moreDetails, label, link }) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(link);
    }

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{pickupLine}</h1>
                <p className="col-md-10 fs-4">{moreDetails}</p>
                {label && <button className="btn btn-primary btn-lg" type="button" onClick={clickHandler}>
                    {label}
                </button>}
            </div>
        </div>
    );
};

export default Jambotron;