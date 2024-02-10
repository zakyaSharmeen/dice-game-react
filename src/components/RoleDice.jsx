import styled from "styled-components";

function RoleDice({ roleDice, currentDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll me</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
