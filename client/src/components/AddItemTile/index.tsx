import React, { FC } from "react";
import { GrAdd } from "react-icons/gr";

export interface AddItemTileProps {
    clickHandler: any;
}

export const AddItemTile: FC<AddItemTileProps> = ({ clickHandler }) => {
    return (
        <>
            <div className="add-item-tile" onClick={clickHandler}>
                <GrAdd />
            </div>
        </>
    );
};

export default AddItemTile;