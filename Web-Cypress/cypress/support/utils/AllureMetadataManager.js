/**
 * Metadata used for Allure Reports
 */

class AllureMetadataManager {
  constructor() {
    this.issue = null;
    this.tms = null;
    this.owner = null;
    this.description = null;
    this.tags = null;
    this.link = null;
  }

  setIssue(issue) {
    this.issue = {
      name: issue,
      url: "https://pvolve.atlassian.net/browse/" + issue.substring(1),
    };
  }

  setTMS(tms) {
    this.tms = {
      name: tms,
      url:
        "https://pvolve.testrail.io/index.php?/cases/view/" + tms.substring(3),
    };
  }

  setOwner(owner) {
    this.owner = owner;
  }

  setDescription(description) {
    this.description = description;
  }

  setTags(...tags) {
    this.tags = tags;
  }

  setLink(link) {
    this.link = link;
  }

  getMetadata() {
    return {
      issue: this.issue,
      tms: this.tms,
      owner: this.owner,
      description: this.description,
      tags: this.tags,
      link: this.link,
    };
  }
}

export default AllureMetadataManager;
