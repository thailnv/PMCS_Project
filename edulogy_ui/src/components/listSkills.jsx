import React from 'react';

import SkillCard from '../common/skillCard';

function SkillList() {
  return (
    <div className="skill">
      <SkillCard
        skillName="Luyện nghe"
        skillImg="/img/listening.png"
      />
      <SkillCard
        skillName="Luyện nói"
        skillImg="/img/speaking.png"
      />
      <SkillCard
        skillName="Luyện đọc"
        skillImg="/img/reading.png"
      />
      <SkillCard
        skillName="Luyện viết"
        skillImg="/img/writing.png"
      />
    </div>
  )
}

export default SkillList