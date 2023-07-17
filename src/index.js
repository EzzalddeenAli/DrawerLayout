import React from "react"
import ReactDOM from "react-dom"
import moment from 'moment'
import {avatarSquare, avatarPortrait, lorem} from "./samplemedia"
import {placeholderImage} from "./samplemedia"
import iconExample from "!svg-inline-loader!./heart_lg.svg"
import 'moment/min/locales'
import {View, Mask, DrawerLayout, CloseButton, Avatar, Text, Heading, Grid, Button} from "@instructure/ui"

const render = (el) => { ReactDOM.render(el, document.getElementById('app')) }
class Example extends React.Component {
  state = {
    open: false,
    trayIsOverlayed: false
  };
  handleOverlayTrayChange = (trayIsOverlayed) => {
    this.setState({ trayIsOverlayed })
  };
  handleTrayDismiss = () => {
    this.setState({ open: false })
  };
  render () {
    return (
      <View
        height="25rem"
        as="div"
        background="primary"
        position="relative"
      >
        { this.state.trayIsOverlayed && this.state.open && <Mask onClick={this.handleTrayDismiss} /> }
        <DrawerLayout onOverlayTrayChange={this.handleOverlayTrayChange}>
          <DrawerLayout.Tray
            id="DrawerLayoutTrayExample1"
            open={this.state.open}
            placement="start"
            label="Drawer Tray Start Example"
            onDismiss={this.handleTrayDismiss}
          >
            <View
              as="div"
              maxWidth="16rem"
              textAlign="center"
              margin="large auto"
              padding="small"
            >
              <CloseButton
                placement="end"
                offset="small"
                onClick={this.handleTrayDismiss}
                screenReaderLabel="Close"
              />
              <Avatar name="foo bar" margin="0 0 small 0" />
              <Text as="div" size="x-small">
                Hello from start tray with a small amount of placeholder content
              </Text>
            </View>
          </DrawerLayout.Tray>
          <DrawerLayout.Content label="Drawer content example">
            <div style={{background: 'white', height: '100%'}}>
              <View as="div" padding="x-large">
                <Heading border="bottom">A simple drawer layout</Heading>
                <Grid startAt="medium" vAlign="middle" colSpacing="none">
                  <Grid.Row>
                    <Grid.Col>
                      <Button
                        margin="small 0"
                        size="small"
                        onClick={() => { this.setState({ open: true }) }}
                        aria-haspopup={this.state.trayIsOverlayed ? 'dialog' : 'region'}
                        aria-controls="DrawerLayoutTrayExample1"
                      >
                        Expand tray
                      </Button>
                    </Grid.Col>
                  </Grid.Row>
                </Grid>
                <Text size="x-small">
                  <p>{lorem.paragraph()}</p>
                </Text>
                <Text size="x-small">
                  <p>{lorem.paragraph()}</p>
                </Text>
              </View>
            </div>
          </DrawerLayout.Content>
        </DrawerLayout>
      </View>
    )
  }
}

render(<Example />)