import {useEffect} from 'react';
import {Skill} from '../lib/skills';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export interface Props {
  loadSkills: () => void;
  skills?: Skill[];
  [key: string]: any;
}

const SkillsList = ({loadSkills, skills}: Props) => {
  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  return (
    <div className="skills-list">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Area</Th>
            </Tr>
          </Thead>
          <Tbody>
            {skills?.map((skill, index) => {
              return (
                <Tr>
                  <Td key={index}>{skill.name}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SkillsList;
