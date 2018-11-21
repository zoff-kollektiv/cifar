import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Constraint from '../constraint';
import styles from './styles';
import translations from '../../../data/translations/columns.json';

export default ({
  person: {
    frontmatter: { name, nativeName, story, ...table }
  }
}) => (
  <div className="person">
    <style jsx>{styles}</style>

    <Constraint>
      <header className="title-container">
        <h1 className="title">
          {name}
          <small className="title-native">{nativeName}</small>
        </h1>
      </header>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: story }} />

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

export const fragment = graphql`
  fragment person on MarkdownRemark {
    frontmatter {
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
      story
    }
  }
`;
