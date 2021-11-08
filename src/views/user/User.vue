<template>
  <div class="group_view layout">
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      "
    >
      <h2 class="label">Users list</h2>

      <div style="width: 20vw; text-align: right">
        <button class="btn btn_submit">Go back</button>
      </div>
    </div>

    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
      "
    >
      <div class="group_list">
        <div class="user_item card card_active">
          <div class="user_item_infos">
            <div>
              <span class="label title">Username:</span
              ><span class="value">Dan Abramov</span>
            </div>
            <div>
              <span class="label title">Email:</span
              ><span>dan.abramov@gmail.com</span>
            </div>
            <div>
              <span class="label title">Role:</span><span>Employee</span>
            </div>
            <div>
              <span class="label title">Group:</span><span>Team Frontend</span>
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>

        <div class="user_item card">
          <div class="user_item_infos">
            <div>
              <span class="label title">Username:</span
              ><span class="value">Dan Abramov</span>
            </div>
            <div>
              <span class="label title">Email:</span
              ><span>dan.abramov@gmail.com</span>
            </div>
            <div>
              <span class="label title">Role:</span><span>Employee</span>
            </div>
            <div>
              <span class="label title">Group:</span><span>Team Frontend</span>
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>

        <div class="user_item card">
          <div class="user_item_infos">
            <div>
              <span class="label title">Username:</span
              ><span class="value">Dan Abramov</span>
            </div>
            <div>
              <span class="label title">Email:</span
              ><span>dan.abramov@gmail.com</span>
            </div>
            <div>
              <span class="label title">Role:</span><span>Employee</span>
            </div>
            <div>
              <span class="label title">Group:</span><span>Team Frontend</span>
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>

        <div class="user_item card">
          <div class="user_item_infos">
            <div>
              <span class="label title">Username:</span
              ><span class="value">Dan Abramov</span>
            </div>
            <div>
              <span class="label title">Email:</span
              ><span>dan.abramov@gmail.com</span>
            </div>
            <div>
              <span class="label title">Role:</span><span>Employee</span>
            </div>
            <div>
              <span class="label title">Group:</span><span>Team Frontend</span>
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>
      </div>

      <div class="form_add">
        <h4 style="margin-bottom: 20px" class="label title">Add User</h4>
        <div class="form_container">
          <div>
            <label class="input_bloc">
              <span class="label">Username: </span>
              <input
                class="input_text"
                type="text"
                placeholder="Enter your username"
              />
            </label>
          </div>

          <div>
            <label class="input_bloc">
              <span class="label">Email: </span>
              <input
                class="input_text"
                type="text"
                placeholder="Enter your email"
              />
            </label>
          </div>

          <div>
            <label class="input_bloc">
              <span class="label">Role : </span>
              <select class="input_text">
                <option>Role 1</option>
                <option>Role 2</option>
                <option>Role 3</option>
                <option>Role 4</option>
              </select>
            </label>
          </div>

          <div>
            <label class="input_bloc">
              <span class="label">Team : </span>
              <select class="input_text">
                <option>Team 1</option>
                <option>Team 2</option>
                <option>Team 3</option>
                <option>Team 4</option>
              </select>
            </label>
          </div>

          <div style="min-width: 30px">
            <button class="btn btn_submit">Add</button>
          </div>

          <div
            style="
              min-width: 30px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-top: 30px;
            "
          >
            <button class="btn btn_del">Delete</button>
            <button class="btn btn_submit">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import edit_icon from "../../assets/images/edit_icon.png";
export default {
  name: "User",
  data() {
    return {
      edit_icon,
    };
  },
  methods: {},
};
</script>
