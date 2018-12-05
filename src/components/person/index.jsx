import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import Constraint from '../constraint';
import findImageById from '../../lib/find-image-by-id';
import styles from './styles';
import translations from '../../../data/translations/columns.json';

export default ({
  images,
  person: {
    frontmatter: { id, name, nativeName, ...table },
    html
  }
}) => {
  const image = findImageById(images.edges, id);

  return (
    <div className="person">
      <Helmet>
        <title>{name}</title>
      </Helmet>

      <style jsx>{styles}</style>

      <Constraint>
        <header className="title-container">
          <h1 className="title">
            {name}
            <small className="title-native">{nativeName}</small>
          </h1>

          {image && (
            <img
              src={image.node.fluid.src}
              className="image"
              alt={`Portrait ${name}`}
            />
          )}
        </header>

        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <h2>Information</h2>

        <dl>
          {Object.keys(table).map(key => (
            <Fragment key={key}>
              {table[key] && (
                <>
                  <dt>{translations[key] || key}</dt>
                  <dd>
                    {Array.isArray(table[key])
                      ? table[key].join(', ')
                      : table[key]}
                  </dd>
                </>
              )}
            </Fragment>
          ))}
        </dl>
      </Constraint>
    </div>
  );
};

export const fragment = graphql`
  fragment person on MarkdownRemark {
    frontmatter {
      id
      nativeName
      name
      identifyingInformation
      dateOfBirth
      placeOfBirth
      countryOfResidence
      aliases
      familyMembers
      familyMembersSubjectToSanctions
      suspectedOrConfirmedLinksToLegalEntities
      suspectedOrConfirmedOverseasProperties
      suspectedOrConfirmedLinksToBankAccounts
      suspectedOrConfirmedLinksToOtherAssets
      estimatesOfAssetsFrozenOrConfiscated
      estimatesOfAssetsReturned
      typeOfSanctions
      startOfSanctions
    }
    html
  }
`;
