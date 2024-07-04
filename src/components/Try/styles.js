import { motion } from "framer-motion";
import styled from "styled-components";

export const BrowserViewContainer = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  gap: 24px;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
`;

export const LargePrice = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #000;
  position: relative;
  margin-bottom: 12px;
`;

export const PulseCircle = styled(motion.div)`
  position: absolute;
  top: 24px;
  right: 40px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #ffc06446;
  z-index: 1;
`;

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #000;
`;

export const PopoverPositioner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const ExtensionTip = styled(motion.div)`
  position: absolute;
  width: max-content;
  display: flex;
  align-items: center;
`;

export const TipText = styled.p`
  display: inline-block;
  margin: 8px;
  font-size: 14px;
  font-weight: 300;
  color: #666;
  max-width: 300px;
  line-height: 1.3;
`;

export const PopoverContentContainer = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: stretch;
`;

export const Header = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  min-width: 250px;
  line-height: 1.5em;
`;

export const ContextHeader = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
  line-height: 1.5em;
`;
