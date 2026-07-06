import { HeadFC } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import ArchDiagram from '../components/ArchDiagram';
import PageLayout from '../components/PageLayout';
import ScrambleText from '../components/ScrambleText';
import { ProjectInterface, projects } from '../data/projects';

import './work.scss';

const ProjectCard = ({
  project,
  index,
  onSelect,
}: {
  project: ProjectInterface;
  index: number;
  onSelect: () => void;
}) => {
  return (
    <motion.li
      layoutId={`card-${project.id}`}
      className="work__card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      onClick={onSelect}
      whileHover={{ y: -4 }}
    >
      <div className="work__card-header">
        <span className="work__card-id">MOD-{String(index + 1).padStart(2, '0')}</span>
        <motion.h3 layoutId={`title-${project.id}`} className="work__card-name">
          {project.name}
        </motion.h3>
        <span className="work__card-signal" />
      </div>

      {project.image && (
        <div className="work__card-thumb">
          <img src={project.image} alt={project.name} loading="lazy" />
        </div>
      )}

      {project.metric && <div className="work__card-metric">▸ {project.metric}</div>}

      <ul className="work__card-stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {/* hover-triggered expansion panel */}
      <div className="work__card-expand">
        <p>{project.description}</p>
        <span className="work__card-cta">[ click to inspect architecture ]</span>
      </div>
    </motion.li>
  );
};

const ProjectDetail = ({
  project,
  onClose,
}: {
  project: ProjectInterface;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="work__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        className="work__detail"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="work__detail-header">
          <motion.h3 layoutId={`title-${project.id}`} className="work__detail-name">
            {project.name}
          </motion.h3>
          <span className="work__detail-path">~/architecture/{project.id}.sys</span>
          <button className="work__detail-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <motion.div
          className="work__detail-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="work__detail-description">{project.description}</p>

          <div className="work__detail-diagram">
            <div className="work__detail-diagram-label">// SYSTEM ARCHITECTURE</div>
            <ArchDiagram architecture={project.architecture} />
          </div>

          <div className="work__detail-footer">
            <ul className="work__card-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.url && (
              <a className="work__detail-link" href={project.url} target="_blank" rel="noreferrer">
                open_project ↗
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Work = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((project) => project.id === selectedId);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    if (projectId && projects.some((p) => p.id === projectId)) {
      setSelectedId(projectId);
    }
  }, []);

  return (
    <PageLayout>
      <main className="work">
        <div className="work__title">
          <span className="work__title-prompt">➜</span>{' '}
          <ScrambleText text="ls ~/projects" as="span" />
          <span className="work__title-count"> · {projects.length} modules loaded</span>
        </div>

        <ul className="work__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedId(project.id)}
            />
          ))}
        </ul>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail project={selectedProject} onClose={() => setSelectedId(null)} />
          )}
        </AnimatePresence>
      </main>
    </PageLayout>
  );
};

export default Work;

export const Head: HeadFC = () => <title>Eric Kao — Work & Portfolio</title>;
